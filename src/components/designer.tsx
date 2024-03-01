import { DragEndEvent, useDndMonitor, useDroppable } from '@dnd-kit/core';

import { cn } from '@/lib/utils';
import { idGenerator } from '@/lib/idGenerator';

import { useDesigner } from '@/hooks/useDesigner';

import { DesignerSidebar } from './designer-sidebar';
import { DesignerElementWrapper } from './designer-element';
import { ElementsType, FormElements } from './form-elements';

export const Designer = () => {
  const {
    addElement,
    elements,
    selectedElement,
    setSelectedElement,
    removeElement,
  } = useDesigner();
  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;

      if (!active || !over) return;

      // adicionar elementos na ultima posição
      const isDesignerBtnElement = active.data.current?.isDesignerBtnElement;
      const isDroppingOverDesignerDropArea =
        over.data.current?.isDesignerDropArea;

      if (isDesignerBtnElement && isDroppingOverDesignerDropArea) {
        const type = active.data.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );

        addElement(elements.length, newElement);
        return;
      }

      // adicionar elementos acima ou abixo de outros elementos
      const isDroppingOverDesignerElementTopHalf =
        over.data.current?.isTopHalfDesignerElement;
      const isDroppingOverDesignerElementBottomHalf =
        over.data.current?.isBottomHalfDesignerElement;

      const isDroppingOverDesignerElement =
        isDroppingOverDesignerElementTopHalf ||
        isDroppingOverDesignerElementBottomHalf;

      const isDroppingSideBarBtnOverDesignerElement =
        isDesignerBtnElement && isDroppingOverDesignerElement;

      if (isDroppingSideBarBtnOverDesignerElement) {
        const type = active.data.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );

        const overId = over.data.current?.elementId;

        const overElementIndex = elements.findIndex((el) => el.id === overId);
        if (overElementIndex === -1) {
          throw new Error('Element not found');
        }

        let indeForNewElement = overElementIndex;
        if (isDroppingOverDesignerElementBottomHalf) {
          indeForNewElement = overElementIndex + 1;
        }

        addElement(overElementIndex, newElement);
        return;
      }

      // mover elementos entre si
      const isDraggingDesignerElement = active.data.current?.isDesignerElement;
      const draggingDesignerElementOverAnoterDesignerElement =
        isDroppingOverDesignerElement && isDraggingDesignerElement;

      if (draggingDesignerElementOverAnoterDesignerElement) {
        const activeId = active.data.current?.elementId;
        const overId = over.data.current?.elementId;

        const actveElementIndex = elements.findIndex(
          (el) => el.id === activeId
        );
        const overElementIndex = elements.findIndex((el) => el.id === overId);

        if (actveElementIndex === -1 || overElementIndex === -1) {
          throw new Error('Element not found');
        }

        const activeElement = { ...elements[actveElementIndex] };
        removeElement(activeElement.id);

        let indeForNewElement = overElementIndex;
        if (isDroppingOverDesignerElementBottomHalf) {
          indeForNewElement = overElementIndex + 1;
        }

        addElement(indeForNewElement, activeElement);
      }
    },
  });

  return (
    <div className='flex w-full h-full'>
      <div
        className='p-4 w-full'
        onClick={() => {
          if (selectedElement) {
            setSelectedElement(null);
          }
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            'bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto',
            droppable.isOver && 'ring-4 ring-primary ring-inset'
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className='text-3xl text-muted-foreground flex flex-grow items-center font-bold'>
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className='p-4 w-full'>
              <div className='h-[120px] rounded-md bg-primary/20'></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className='flex flex-col w-full gap-2 p-4'>
              {elements.map((el) => (
                <DesignerElementWrapper key={el.id} element={el} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};
