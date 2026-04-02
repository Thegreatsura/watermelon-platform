import type { LucideIcon } from 'lucide-react';
import {
  FolderKanbanIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
} from 'lucide-react';

import { Button } from '@/components/base-ui/button';

type ActionButton = {
  icon: LucideIcon;
  label: string;
};

const actions: readonly ActionButton[] = [
  { icon: SlidersHorizontalIcon, label: 'Controls' },
  { icon: FolderKanbanIcon, label: 'Projects' },
  { icon: SparklesIcon, label: 'Insights' },
] as const;

const ButtonGroup12 = () => {
  return (
    <div className="bg-muted/20 inline-flex w-fit rounded-md p-1 rtl:space-x-reverse">
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isFirst = index === 0;
        const isLast = index === actions.length - 1;

        return (
          <Button
            key={action.label}
            variant="ghost"
            className={[
              'text-muted-foreground hover:bg-background hover:text-foreground gap-2 rounded-none px-3 focus-visible:z-10',
              isFirst ? 'rounded-l-md' : '',
              isLast ? 'rounded-r-md' : '',
            ].join(' ')}
          >
            <Icon className="size-4" />
            {action.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup12;
