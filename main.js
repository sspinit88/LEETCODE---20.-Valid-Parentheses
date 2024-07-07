/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false


Ваша задача - определить, является ли входная строка s, 
содержащая только символы '(', ')', '{', '}', '[' и ']', действительной.

Входная строка является действительной, если:

    Открывающие скобки должны быть закрыты тем же типом скобок.
    Открывающие скобки должны быть закрыты в правильном порядке.
    У каждой закрывающей скобки есть соответствующая открывающая скобка того же типа.

Вот шаги, которые мы будем следовать:

1. Инициализируйте стек для отслеживания открывающих скобок.
2. Пройдите по каждому символу в строке s. Если символ является открывающей скобкой, добавьте его в стек. 
   Если символ является закрывающей скобкой, проверьте, есть ли соответствующая открывающая скобка в стеке. 
   Если нет, верните false. В противном случае удалите открывающую скобку из стека.
3. После прохождения всех символов в s, проверьте, пуст ли стек. Если стек пуст, верните true. 
   В противном случае верните false.

Your task is to determine whether the input string s, 
containing only the characters '(', ')', '{', '}', '[' and ']', is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Here are the steps we will follow:

1. Initialize a stack to track the opening brackets.
2. Go through each character in the string s. 
   If the character is an opening bracket, push it into the stack. 
   If the character is a closing bracket, check whether there is a corresponding opening bracket in the stack. 
   If not, return false. Otherwise, pop the opening bracket from the stack.
3. After going through all characters in s, check whether the stack is empty. 
   If the stack is empty, return true. Otherwise, return false.

*/

function isValid(s) {
  // Инициализируем стек для отслеживания открывающих скобок
  // Initialize a stack to track the opening brackets
  let stack = [];

  // Создаем словарь для отображения открывающих и закрывающих скобок
  // Create a dictionary to map opening and closing brackets
  let bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // Проходим по каждому символу в строке s
  // Go through each character in the string s
  for (let char of s) {
    // Если символ является закрывающей скобкой
    // If the character is a closing bracket
    if (bracketMap[char]) {
      // Проверяем, есть ли соответствующая открывающая скобка в стеке
      // Check whether there is a corresponding opening bracket in the stack
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      // Если символ является открывающей скобкой, добавляем его в стек
      // If the character is an opening bracket, push it into the stack
      stack.push(char);
    }
  }

  // Проверяем, пуст ли стек
  // Check whether the stack is empty
  return stack.length === 0;
}
