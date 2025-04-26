function functionName() {
  alert(arguments.callee.name);
}

// Call the function to test
functionName();
