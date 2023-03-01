messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  alert('для хранения и сообщения, и даты нужно использовать WeakMap, т.к. потребуется и ключ, и значение, т.е. WeakSet для данной цели не подойдёт')