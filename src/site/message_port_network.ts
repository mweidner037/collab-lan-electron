import { BroadcastNetwork } from "@collabs/collabs";

export class MessagePortNetwork implements BroadcastNetwork {
  onreceive!: (message: Uint8Array) => void;

  /**
   * Caller needs to call messagePort.start(), **after**
   * setting this.onreceive.
   */
  constructor(private readonly messagePort: MessagePort) {
    this.messagePort.addEventListener("message", (e) => {
      if (e.data.type === "message") {
        this.onreceive(e.data.message);
      }
    });
  }

  send(message: Uint8Array): void {
    this.messagePort.postMessage({ type: "message", message });
  }

  save(): Uint8Array {
    throw new Error("Method not implemented.");
  }

  load(saveData: Uint8Array | null): void {
    throw new Error("Method not implemented.");
  }
}
