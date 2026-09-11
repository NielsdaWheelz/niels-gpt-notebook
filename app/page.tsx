import { marked } from "marked";
import notebook from "../notebook.md?raw";

export default function Home() {
  return (
    <main>
      <article
        className="notebook"
        dangerouslySetInnerHTML={{ __html: marked.parse(notebook, { async: false }) }}
      />
    </main>
  );
}
