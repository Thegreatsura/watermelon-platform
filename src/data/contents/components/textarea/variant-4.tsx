import { useId } from 'react';

import { Label } from '@/components/base-ui/label';
import { Textarea } from '@/components/base-ui/textarea';

const Textarea4 = () => {
  const id = useId();

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor={id}>
        Issue description <span className="text-destructive">*</span>
      </Label>
      <Textarea
        id={id}
        placeholder="Describe the issue you're facing..."
        required
        className=""
      />
    </div>
  );
};

export default Textarea4;
