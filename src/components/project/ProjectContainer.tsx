import CompleteCheck from './CompleteCheck';
import CreateProject from './CreateProject';
import ProjectCard from './ProjectCard';
import SortSelect from './SortSelect';

export default function ProjectContainer() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="flex items-center justify-between">
        <CompleteCheck />
        <div className="flex items-center gap-1">
          <SortSelect />
          <CreateProject />
        </div>
      </div>
      <ProjectCard />
    </div>
  );
}
