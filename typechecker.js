// Node
const { readFileSync } = require("fs");

// Parser
const { Parser } = require("acorn");
const walk = require("acorn-walk");

// Read code file from disk
const code = readFileSync("code.js", "utf-8");

// Parse userland code with Acord
const ast = Parser.parse(code, { ecmaVersion: 2020 });

typecheck(ast);

function typecheck(root) {
  walk.simple(root, {
    VariableDeclarator(node) {
      console.log(node);
    },
  });
}
