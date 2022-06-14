function runFiveMiles() {
    console.log("Go for a five-mile run");

}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function monday() {
    exerciseRoutine(liftWeights);

}
monday()

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(() => console.log("Stretch! Work that core!"));

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious`);

    };
}

const afterExercise = morningRoutine(liftWeights);

afterExercise();



function receivesAFunction(callBack) {
    return callBack()

}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('I am a named function');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am an anonymous function');
    }
}





