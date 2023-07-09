import Body from "~/components/body";
import Sidebar from "~/components/sidebar";

export default () => {
  return (
    <>
     <div class="bg-red-500 flex  min-h-screen w-full justify-end">
      <Body></Body>
     
      <div class="bg-white w-96 flex flex-col px-3">
       <Sidebar></Sidebar>
      </div>

        
    </div>
    </>
  );
};


