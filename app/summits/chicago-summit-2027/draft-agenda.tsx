import Image from 'next/image';

const committee = [
  ['Chris Gervang', 'chris_gervang'],
  ['Ib Green', 'ib_green'],
  ['Felix Palmer', 'felix_palmer'],
  ['Xiaoji Chen', 'xiaoji_chen'],
];

const days = [
  {
    title: 'Day 1: Frameworks',
    slots: [
      ['08:30', 'Breakfast & social', 'break'],
      ['09:00 – 09:55', 'State of the Union', 'opening'],
      ['10:00 – 10:25', 'TBD', 'talk'],
      ['10:30', 'Break & networking', 'break'],
      ['11:00 – 11:25', 'TBD', 'talk'],
      ['11:30 – 11:55', 'TBD', 'talk'],
      ['12:00', 'Lunch', 'break'],
      ['13:00 – 13:25', 'TBD', 'talk'],
      ['13:30 – 13:55', 'TBD', 'talk'],
      ['14:00 – 14:25', 'TBD', 'talk'],
      ['14:30', 'Break & networking', 'break'],
      ['15:00 – 15:25', 'TBD', 'talk'],
      ['15:30 – 15:55', 'TBD', 'talk'],
    ],
  },
  {
    title: 'Day 2: Applications',
    slots: [
      ['09:00', 'Breakfast & social', 'break'],
      ['09:30 – 09:55', 'TBD', 'talk'],
      ['10:00 – 10:25', 'TBD', 'talk'],
      ['10:30', 'Break & networking', 'break'],
      ['11:00 – 11:25', 'TBD', 'talk'],
      ['11:30 – 11:55', 'TBD', 'talk'],
      ['12:00', 'Lunch', 'break'],
      ['13:00 – 13:25', 'TBD', 'talk'],
      ['13:30 – 13:55', 'TBD', 'talk'],
      ['14:00', 'Break & networking', 'break'],
      ['14:30 – 14:55', 'TBD', 'talk'],
      ['15:00 – 15:25', 'TBD', 'talk'],
      ['15:30 – 16:00', 'Community panel', 'closing'],
    ],
  },
];

export default function DraftAgenda() {
  return (
    <section
      id="agenda"
      aria-labelledby="agenda-title"
      className="scroll-mt-20 border-t-4 border-cyan-500 py-12 sm:px-8"
    >
      <h2 id="agenda-title" className="text-4xl font-medium mb-4">
        Draft agenda
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-10">
        A proposed two-day schedule following previous summits. Times and
        participation are tentative; topics for the remaining slots are to be
        announced.
      </p>
      {days.map((day, dayIndex) => (
        <section
          key={day.title}
          aria-labelledby={`day-${dayIndex + 1}`}
          className="mb-12"
        >
          <h3 id={`day-${dayIndex + 1}`} className="text-3xl font-medium mb-8">
            {day.title}
          </h3>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {day.slots.map(([time, title, kind]) => {
              const isCommittee = kind === 'opening' || kind === 'closing';
              return (
                <li
                  key={time}
                  className={
                    kind === 'break'
                      ? 'col-span-full bg-gray-100 dark:bg-gray-800 px-6 py-3 text-lg font-medium'
                      : `${isCommittee ? 'md:col-span-2' : ''} bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 min-h-72`
                  }
                >
                  {kind === 'break' ? (
                    <span>
                      {time} {title}
                    </span>
                  ) : (
                    <>
                      <p className="text-3xl font-medium mb-6">{time}</p>
                      {isCommittee && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {committee.map(([name, image]) => (
                            <Image
                              key={name}
                              src={`/images/speakers/${image}.jpg`}
                              alt={name}
                              width={72}
                              height={72}
                              className="h-[72px] w-[72px] object-cover"
                            />
                          ))}
                        </div>
                      )}
                      <h4 className="text-xl font-medium mb-4">{title}</h4>
                      {isCommittee ? (
                        <>
                          <p className="text-sm font-medium mb-2">
                            {kind === 'opening'
                              ? 'Presenters'
                              : 'Discussion leaders'}
                            : vis.gl Technical Steering Committee
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {committee.map(([name]) => name).join(' · ')}
                          </p>
                        </>
                      ) : (
                        <p className="text-muted-foreground">
                          Topic and presenters to be announced.
                        </p>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </section>
  );
}
