import { Button, ButtonIconPosition } from 'ethereal-ui';
import { Search } from 'lucide-react';

export default () => (
  <div className="flex flex-row gap-4 flex-wrap">
    <Button variant="default" icon={<Search />} />
    <Button variant="default" icon={<Search />} iconPos={ButtonIconPosition.RIGHT}>
      Search
    </Button>
    <Button variant="default" icon={<Search />} iconPos={ButtonIconPosition.LEFT}>
      Search
    </Button>
    <Button variant="secondary" icon={<Search />} iconPos={ButtonIconPosition.LEFT}>
      Search
    </Button>
    <Button variant="dashed" icon={<Search />} iconPos={ButtonIconPosition.LEFT}>
      Search
    </Button>
  </div>
)