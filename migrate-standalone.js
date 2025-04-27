// migrate-standalone.js
const { Project, SyntaxKind } = require("ts-morph");

// 1. Aponte para o seu tsconfig
const project = new Project({
  tsConfigFilePath: "tsconfig.app.json",
});

// 2. Percorra cada arquivo de componente
project.getSourceFiles("src/app/**/*.component.ts").forEach((sourceFile) => {
  sourceFile.getClasses().forEach((cls) => {
    const deco = cls.getDecorator("Component");
    if (!deco) return;

    const [arg] = deco.getArguments();
    if (!arg || arg.getKind() !== SyntaxKind.ObjectLiteralExpression) return;

    const objLit = arg;

    // 3. Se já existe standalone, pula
    if (objLit.getProperty("standalone")) return;

    // 4. Insere standalone: false como primeira propriedade
    objLit.insertPropertyAssignments(0, [
      { name: "standalone", initializer: "false" },
    ]);

    console.log(`✅ Inserido standalone: false em ${sourceFile.getBaseName()}`);
  });
});

// 5. Salva tudo de volta em disco
project.saveSync();
