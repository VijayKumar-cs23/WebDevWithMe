function HandleFormSubmit(event) {
event.preventDefault();
console.log("Form Submitted Successfully!");
}

export default function Form() {
return ( 
       <div>
            <form onSubmit={HandleFormSubmit}> 
                <input type="text"placeholder="Write Your Thoughts..."/> 
                <button type="submit">Submit</button> 
            </form> 
        </div>
);
}
