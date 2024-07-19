function func1() {
    console.log("first")
}

function func2(func1) {
    console.log("second")
    func1()
}

func2(func1)