import { useId } from 'react';

import { Label } from '@/components/base-ui/label';
import { Textarea } from '@/components/base-ui/textarea';

const Textarea2 = () => {
  const id = useId();

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor={id}>Your input</Label>
      <Textarea
        id={id}
        placeholder="Share your thoughts..."
        className="rounded-sm shadow-sm"
      />
    </div>
  );
};

export default Textarea2;
