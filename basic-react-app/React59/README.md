<!-- //Redering of an array bassed on each item. -->

import { useState } from "react";

export default function ArrayRendering() {
    let [fruits, setFruits] = useState([
        "Apple",
        "Banana",
        "Mango",
        "Orange"
    ]);

    return (
        <div>
            <h2>Fruit List</h2>

            {fruits.map((fruit) => (
                <p>{fruit}</p>
            ))}
<!-- 
fruits is an array.
map() visits each element of the array.
fruit represents the current element.
<p>{fruit}</p> creates a paragraph for each element.
React renders all the generated paragraphs. -->
<!-- Remember: map() returns a new array. -->


        </div>
    );
}

