'use client';

import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

import { deleteLink } from '@/lib/actions/crudAction';

const initialState = {
  message: '',
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  );
}

export function DeleteForm({ id }: { id: number }) {
  const deleteLinkWithId = deleteLink.bind(null, id);
  const [state, formAction] = useFormState(deleteLinkWithId, initialState);

  return (
    <form action={formAction}>
      <DeleteButton />

      {state.message
        ? toast(state.message, {
            ariaProps: { role: 'status', 'aria-live': 'polite' },
          })
        : null}
    </form>
  );
}
