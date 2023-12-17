let arr = { "one": "ek_number", "two": "do_number", "three": "teen_number" };

// Iterate over key-value pairs in the object
for (let key in arr) {
    // Access the value using the key
    if(key=='one'){
        console.log("one hai bhai");
    }
    let value = arr[key];
    if(value==='ek_number'){
        console.log('good');
    }
    
    console.log(value);
    console.log(key);
    console.log(`${key}: ${value}`);
}

