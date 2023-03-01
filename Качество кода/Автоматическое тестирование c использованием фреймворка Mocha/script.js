

// проблема данного теста в том, что три теста заключены в одну функцию и при тестиовании будет сложно понять, где именно произошла ошибка. 
// не прописаны ожидаемые результаты выполнения

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

