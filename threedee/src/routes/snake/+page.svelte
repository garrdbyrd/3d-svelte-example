<script lang="ts">
  let inputFile:string = '';
  let showVisualization = false;

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return; // No file selected
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target) {
        inputFile = e.target.result as string;
      }
    };
    reader.readAsText(file);
  }
  
  function visualize() {
    showVisualization = true;
  }
</script>

<main>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Snake Visualization</title>
      <style>
        body { margin: 0; }
        canvas { display: block; }
      </style>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type="file" accept=".tec" on:change={handleFileChange}>
      {#if inputFile}
        <button on:click={visualize}>Visualize</button>
      {/if}
      {#if showVisualization}
        <pre>{inputFile}</pre>
      {/if}
  </body>
</main>
  