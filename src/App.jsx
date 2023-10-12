import "./App.css";
import Data from "./Data";
import Accordion from "./components/Accordion";

// function dataList(dataItems) {
//   return (
//     <Accordion
//       key={dataItems.id}
//       title={dataItems.title}
//       content={dataItems.content}
//     />
//   );
// }

function App() {
  return (
    <>
      <div className=" justify-center items-center">
        {Data.map((dataItems) => {
          return (
            <Accordion
              key={dataItems.id}
              title={dataItems.title}
              content={dataItems.content}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
