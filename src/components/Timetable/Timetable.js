import { EventBoard } from './EventBoard';
import { PageTitle } from './PageTitle';

import events from './events.json';

export const Timetable = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </>
  );
};
