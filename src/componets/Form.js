import { Fragment } from "react";
import Card from "./Card";

const From=(props)=>{
    return (
        <Fragment>
            <Card>
            <div>
            <form class="m-4 flex flex-col gap-5  rounded-xl">
            <input class=" p-5  w-400 bg-white border-yellow-500
           border-t border-b border-r border-l" placeholder="Name"/>       
           <input class="  p-5  w-400 bg-white border-yellow-500 border-t border-l border-r border-b font-bold" placeholder="LastName"/>
           <input class="  p-5  w-400 bg-white border-yellow-500 border-t border-b border-r border-l font-bold" placeholder="Email"/>
          <button class="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500
           border-t border-b border-r">Subscribe</button>
      </form>

            </div>
            </Card>

        </Fragment>
    )
}
export default From;