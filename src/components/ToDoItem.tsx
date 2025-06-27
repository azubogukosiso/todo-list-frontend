const removeFromList = () => {
  console.log("remove from list");
};

const scheduleForTommorrow = () => {
  console.log("schedule for tommorrow");
};

const editItem = () => {
  console.log("edit item");
};

const markAsDone = () => {
  console.log("mark as done");
};

type todoItemProps = {
  todoItem: string;
};

const ToDoItem: React.FC<todoItemProps> = ({ todoItem }) => {
  return (
    <div className="bg-orange-300 shadow p-3 rounded min-w-full">
      <p>{todoItem}</p>
      <div className="mt-3">
        {/* ########## REMOVE FROM LIST ########## */}
        <button
          className="p-2 bg-orange-500 rounded text-white cursor-pointer active:scale-95 transition-all hover:bg-orange-600 mr-2 tooltip"
          data-tip="Remove from List"
          onClick={() => removeFromList()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
          </svg>
        </button>

        {/* ########## SCHEDULE FOR TOMMORROW ########## */}
        <button
          className="p-2 bg-orange-500 rounded text-white cursor-pointer active:scale-95 transition-all hover:bg-orange-600 mr-2 tooltip"
          data-tip="Schedule for Tommorrow"
          onClick={() => scheduleForTommorrow()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3V1H9V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V9H20V5H17V7H15V5H9V7H7V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7ZM17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12ZM11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16ZM16 13V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V13H16Z" />
          </svg>
        </button>

        {/* ########## EDIT ITEM ########## */}
        <button
          className="p-2 bg-orange-500 rounded text-white cursor-pointer active:scale-95 transition-all hover:bg-orange-600 mr-2 tooltip"
          data-tip="Edit Item"
          onClick={() => editItem()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z" />
          </svg>
        </button>

        {/* ########## MARK AS DONE ########## */}
        <button
          className="p-2 bg-orange-500 rounded text-white cursor-pointer active:scale-95 transition-all hover:bg-orange-600 tooltip"
          data-tip="Mark as Done"
          onClick={() => markAsDone()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
