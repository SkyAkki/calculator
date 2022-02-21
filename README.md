# calculator

Current Problems:
1. At .display > .input, text is overflowing outside the display zone. We want the long inputs to wrap below the first string of input.
2. Functionality to input negative numbers not present yet. (not asked in TOP)

Learnings:
1. The variables declared without the var keyword becomes global variables, irrespective of where they are declared. [use 'use strict'; inside the function to avoid this behaviour if the variable is being used without its declarator.] [http://blog.niftysnippets.org/2008/03/horror-of-implicit-globals.html] [https://stackoverflow.com/questions/6888570/declaring-variables-without-var-keyword]

Bugs:
1. Backspace logic is hardcoded and yields unnecessary text in display.
2. Early pressing of equals results in unexpected answers.