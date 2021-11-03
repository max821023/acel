let input = require('./input.json');

function createOutput(input, final = {}) {
  for (key in input) {
    if (key === 'optionLists' && !input[key][0].isOptional) {
      const options = input[key][0].options;
      for (let i = 0; i < options.length; i++) {
        let option = options[i];
        console.log(i);
        final['id'] = option.id;
        final['quantity'] = 1;
        final['options'] = [{}];
        final['itemExtraOption'] = {'id': option.id, 'name': option.name}
        createOutput(option, final.options)
      }
    }
  }
  return [final];
}

let output = createOutput(input);

console.log(output)


