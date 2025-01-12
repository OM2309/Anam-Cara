import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function JoinRoom() {
  return (
    <div className="flex flex-col items-center justify-center w-52 h-52 border border-dashed border-gray-400 rounded-xl p-4 space-y-4 cursor-pointer">
      <div className="text-center">
        <Plus className="mx-auto mb-2" />
        <span>Join Room</span>
      </div>
      <Input placeholder="Enter Room ID" className="w-full" />
      <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
        Join
      </Button>
    </div>
  );
}
