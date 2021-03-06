import { Link } from 'react-router-dom';
import { Tabs, Tab } from '../Tabs';

export const TaskList = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
  const tasksInWeek = [
    [
      {
        "description": "Some description is here",
        "title": "Read book",
        "day": 0,
        "id": "00",
        "done": true
      },
      {
        "description": "",
        "title": "Write new article",
        "day": 0,
        "id": "01",
        "done": false
      },
      {
        "title": "Do exercises",
        "day": 0,
        "id": "02"
      },
      {
        "title": "Cleaning Room",
        "day": 0,
        "id": "03"
      },
      {
        "title": "Change oil",
        "day": 0,
        "id": "04"
      },
      {
        "title": "New 10",
        "description": "",
        "day": "0",
        "id": "05"
      },
      {
        "title": "New 02",
        "description": "",
        "day": "0",
        "id": "06"
      }
    ],
    [
      {
        "description": "Make home tasks (math, geo)",
        "title": "Make homework",
        "day": 1,
        "id": "10"
      }
    ],
    [
      {
        "description": "",
        "title": "Go to gym",
        "day": "2",
        "id": "20"
      },
      {
        "description": "OKEY",
        "title": "Play PC",
        "day": "2",
        "id": "21"
      }
    ],
    [],
    [],
    [
      {
        "title": "Visit grandma",
        "day": 5,
        "id": "50",
        "done": true
      }
    ],
    [
      {
        "description": "watch King Lion, How to Train Your Dragon",
        "title": "Watch cartoons",
        "day": 6,
        "id": "60"
      }
    ]
  ];

  return (
    <Tabs>
      {tasksInWeek.map((tasks, index) =>
        <Tab
          key={index}
          title={days[index]}
        >
          <ol>
            { tasks.map(task =>
            <li key={task.id}>
              <Link to={{
                pathname: `/tasks/${task.id}`,
                state: { task }
              }}
              >
                {task.title}
              </Link>
            </li>)
          }
          </ol>
          <button>ADD NEW</button>
        </Tab>)}
    </Tabs>
  );
};
