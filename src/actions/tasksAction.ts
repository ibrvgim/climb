'use server';

export async function createTaskAction(data: FormData) {
  console.log(data);
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const status = data.get('status') as string;
  const boardName = data.get('boardName') as string;
  const subtaskOne = data.get('subtask-1') as string;
  const subtaskTwo = data.get('subtask-2') as string;
  const subtaskThree = data.get('subtask-3') as string;
  const subtaskFour = data.get('subtask-4') as string;
  const subtaskFive = data.get('subtask-5') as string;
}
