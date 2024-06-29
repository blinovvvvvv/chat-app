import { DialogByIdPage } from '@/src/screens/dialog-by-id';

export default function DialogById({ params }: { params: { id: string } }) {
	return <DialogByIdPage params={params} />;
}
