import { Plus } from "lucide-react";

export function CreateRoom() {
  return (
    <div className="flex items-center justify-center w-48 h-48 border  border-gray-400 rounded-xl cursor-pointer">
      <div className="text-center">
        <Plus className="mx-auto mb-2" />
        <span>Create Room</span>
      </div>
    </div>
  );
}
