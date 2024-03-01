import { GetFormById } from '@/actions/form';

const FormsPage = async ({ params }: { params: { id: string } }) => {
  const form = await GetFormById(params.id);

  if (!form) {
    throw new Error('Form not found');
  }

  return <>Detaails</>;
};

export default FormsPage;
