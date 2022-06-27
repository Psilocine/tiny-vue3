import { computed } from "../../reactivity/computed";

export function generate(ast) {
  const context = createCodegenContext();
  context.push("return ");
  const functionName = "render";
  const args = ["_ctx", "_cache"];
  const signature = args.join(", ");

  context.push(`function ${functionName}(${signature}){`);

  context.push(`return `);

  genNode(ast.codegenNode, context);
  context.push("}");
  return {
    code: context.code,
  };
}

function createCodegenContext(): any {
  const context = {
    code: "",
    push(source) {
      context.code += source;
    },
  };

  return context
}

function genNode(node: any, context) {
  const { push } = context;
  push(`'${node.content}'`);
  return node;
}
