using System;
using System.Collections.Generic;
using System.Linq;

namespace Problem_2_SoftUni_Course_Planning
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] firstEnter = Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries);
            List<string> answer = new List<string>();


            for (int i = 0; i < firstEnter.Length; i++)
            {
                answer.Add(firstEnter[i]);
            }



            while (true)
            {
                string[] value = Console.ReadLine().Split(":", StringSplitOptions.RemoveEmptyEntries);

                string command = value[0];

                if (value[0] == "course start")
                {
                    break;
                }


                if (command == "Add")
                {
                    string cource = value[1];

                    if (answer.Contains(cource) == false)
                    {
                        answer.Add(cource);
                    }
                }
                else if (command == "Insert")
                {
                    string lessonTitle = value[1];
                    int index = int.Parse(value[2]);

                    if (answer.Contains(lessonTitle) == false)
                    {
                        answer.Insert(index, lessonTitle);
                    }
                    

                }
                else if (command == "Remove")
                {
                    string lessonTitle = value[1];
                    if (answer.Contains(lessonTitle))
                    {
                        answer.Remove(lessonTitle);
                    }
                    if (answer.Contains(lessonTitle + "-Exercise"))
                    {
                        answer.Remove(lessonTitle + "-Exercise");
                    }
                }
                else if (command == "Swap")
                {
                    string lessonTitleExist = value[1];
                    string lessonTitleToSwap = value[2];
                    string exercise = lessonTitleExist + "-Exercise";
                    string exercise2 = lessonTitleToSwap + "-Exercise";

                    if (answer.Contains(lessonTitleExist) && answer.Contains(lessonTitleToSwap))
                    {
                        if (answer.Contains(lessonTitleExist) && answer.Contains(lessonTitleToSwap) && answer.Contains(exercise) == false && answer.Contains(exercise2) == false)
                        {
                            int first = answer.IndexOf(lessonTitleExist);
                            int second = answer.IndexOf(lessonTitleToSwap);

                            answer.Remove(lessonTitleExist);
                            answer.Remove(lessonTitleToSwap);

                            answer.Insert(first, lessonTitleToSwap);
                            answer.Insert(second, lessonTitleExist);


                        }
                        else if (answer.Contains(lessonTitleExist) && answer.Contains(lessonTitleToSwap) && answer.Contains(exercise))
                        {
                            // string lessonTitleExist = value[1];
                            // string lessonTitleToSwap = value[2];
                            // string exercise = lessonTitleExist + "-Exercise";
                            // string exercise2 = lessonTitleToSwap + "-Exercise";

                            int first = answer.IndexOf(lessonTitleExist);
                            int firstEx = answer.IndexOf(exercise);
                            int second = answer.IndexOf(lessonTitleToSwap);

                            answer.Remove(lessonTitleExist);
                            answer.Remove(lessonTitleToSwap);
                            answer.Remove(exercise);

                            answer.Insert(second, exercise);
                            answer.Insert(second, lessonTitleExist);
                            answer.Insert(first, lessonTitleToSwap);

                        }
                        else if (answer.Contains(lessonTitleExist) && answer.Contains(lessonTitleToSwap) && answer.Contains(exercise2))
                        {
                            int second = answer.IndexOf(lessonTitleToSwap);
                            int secondEx = answer.IndexOf(exercise2);
                            int first = answer.IndexOf(lessonTitleExist);

                            answer.Remove(lessonTitleToSwap);
                            answer.Remove(lessonTitleExist);
                            answer.Remove(exercise2);

                            answer.Insert(first, exercise2);
                            answer.Insert(first, lessonTitleToSwap);
                            answer.Insert(second-1, lessonTitleExist);
                        }
                        else if (answer.Contains(lessonTitleExist) && answer.Contains(lessonTitleToSwap) && answer.Contains(exercise2) && answer.Contains(exercise))
                        {
                            int second = answer.IndexOf(lessonTitleToSwap);
                            int secondEx = answer.IndexOf(exercise2);
                            int first = answer.IndexOf(lessonTitleExist);
                            int firstEx = answer.IndexOf(exercise);

                            answer.Remove(exercise);
                            answer.Remove(lessonTitleToSwap);
                            answer.Remove(lessonTitleExist);
                            answer.Remove(exercise2);

                            answer.Insert(first, exercise2);
                            answer.Insert(first, lessonTitleToSwap);
                            answer.Insert(second, exercise);
                            answer.Insert(second, lessonTitleExist);
                        }

                    }
                }
                else if (command == "Exercise")
                {
                    string lessonTitle = value[1];
                    string exercise = lessonTitle + "-Exercise";
                    if (answer.Contains(lessonTitle) == false)
                    {
                        answer.Add(lessonTitle);
                        //int positionOfLesson = answer.IndexOf(lessonTitle);
                        answer.Add(exercise);
                    }
                    else if (true)
                    {
                        int lessonIndex = answer.IndexOf(lessonTitle);
                        answer.Insert(lessonIndex, exercise);
                    }


                }
            }
            foreach (var item in answer)
            {
                Console.WriteLine($"{answer.IndexOf(item) + 1}.{item}");
            }
        }
    }
}
