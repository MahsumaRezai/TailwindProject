import { Fragment } from "react";
import Card from "./Card";

const From=(props)=>{
    return (
        <Fragment>
            <Card>
            <div>
            <form class="m-4 flex flex-col gap-5  rounded-xl font-mono italic">
            <input class=" p-5  w-400 bg-fuchsia-100 border-yellow-500 rounded-xl
            border-2 italic text-sm text-center text-red text-blue-600/100  border-double" placeholder="Name"/>       
           <input class="  p-5  w-400 bg-fuchsia-100 border-yellow-500  border-double rounded-xl border-2  font-bold italic text-sm text-center text-red text-blue-600/100" placeholder="LastName"/>
           <input class="  p-5  w-400 bg-fuchsia-100   border-2  border-double  border-yellow-500 rounded-xl  font-bold italic text-sm text-center text-red text-blue-600/100" placeholder="Email"/>
          <button class="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500
           border-t border-b border-r">Subscribe</button>
      </form>

            </div>
            </Card>

        </Fragment>
    )
}
export default From;