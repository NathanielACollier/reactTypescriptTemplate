System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    //tsconfig: true
    emitDecoratorMetadata: true,
    jsx: 'react'
  },
  paths: {
    'npm:':'https://unpkg.com/'
    
  },
  map: {
    'typescript': 'npm:typescript@2.2.2/lib/typescript.js',
    'react': 'npm:react@15.3.2/dist/react.min.js',
    'react-dom': 'npm:react-dom@15.3.2/dist/react-dom.min.js',
    
    'app': './src'
  },
  packages: {
    app: {
      main: './main.tsx',
      defaultExtension: false
    }
  }
});