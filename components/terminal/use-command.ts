import { useRouter } from "next/navigation";
import { useState } from "react";

export interface OutPut {
  command: string;
  result?: string[];
}
export default function useCommandHandler() {
  const router = useRouter();
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<OutPut[]>([]);

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value.toLowerCase().trim());
  };

  const superCommandHandler = (result: string[]) => {
    setOutput((prev) => [
      ...prev,
      {
        command: command,
        result: result,
      },
    ]);
    setCommand("");
  };

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (command) {
      case "clear":
        setCommand("");
        setOutput([]);
        return;

      case "projects":
        router.push("/projects");
        setCommand("");
        setOutput([]);
        return;

      case "contact":
        command.trim().toLowerCase();
        router.push("/contact");
        setCommand("");
        setOutput([]);
        return;

      case "blog":
        command.trim().toLowerCase();
        router.push("/blog");
        setCommand("");
        setOutput([]);
        return;
      case "github":
        command.trim().toLowerCase();
        router.push("https://github.com/kennyAnyi9");
        setCommand("");
        setOutput([]);
        return;

      default:
        command.trim().toLowerCase();
        superCommandHandler([
          `Command ${`"${command}"`} not found, try again.`,
        ]);
        break;
    }
  };

  return {
    command,
    output,
    handleCommandChange,
    handleCommandSubmit,
  };
}
