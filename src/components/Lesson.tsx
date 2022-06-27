import { CheckCircle } from "phosphor-react";

export function Lesson() {
  return (
    <a href="#">
      <span className="text-gray-300"></span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
          </span>
          <span className="text-xs rounded py[0.125rem] px-2"></span>
        </header>
        <strong className="text-gray-200 mt-5 block"></strong>
      </div>
    </a>
  );
}
