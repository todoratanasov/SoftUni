using System;
using System.Linq;


namespace _1._Largest_Common_End
{
    class Program
    {
        //To “rotate an array on the right” means to move its last element first: {1, 2, 3}  {3, 1, 2}.
        //Write a program to read an array of n integers(space separated on a single line) and an integer k, rotate the array right k times and sum 
        //the obtained arrays after each rotation as shown below.

        static void Main(string[] args)
        {
            int[] array = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int rotations = int.Parse(Console.ReadLine());

            int[] sumArray = new int[array.Length];
            int[] sumArray2 = new int[array.Length];
            int[] answer = new int[array.Length];

            if (rotations == 1)
            {

                for (int i = 0; i < rotations; i++)
                {        //i=0




                    for (int j = 0; i < 1; i++)
                    {
                        sumArray[i] = array[array.Length - 1];

                    }
                    for (int k = 1; k < array.Length; k++)
                    {
                        sumArray[k] = array[k - 1];
                        if (k == array.Length - 1)
                        {
                            break;
                        }

                    }
                    for (int l = 0; l < array.Length; l++)
                    {
                        answer[l] = sumArray2[l] + sumArray[l];
                        array[l] = sumArray[l];
                    }
                }
            }
            else
            {
                for (int i = 0; i < rotations; i++)
                {        //i=0




                    for (int j = 0; j < 1; j++)
                    {
                        sumArray[j] = array[array.Length - 1];

                    }
                    for (int k = 1; k < array.Length; k++)
                    {
                        sumArray[k] = array[k - 1];
                        if (k == array.Length - 1)
                        {
                            break;
                        }

                    }

                  // Console.Write("array=" + string.Join(" ", array));
                  // Console.Write("sumArray=" + string.Join(" ", sumArray));
                  // Console.Write("sumArray2=" + string.Join(" ", sumArray2));
                  // Console.Write("answer=" + string.Join(" ", answer));
                  //

                    for (int l = 0; l < array.Length; l++)
                    {
                        answer[l] = sumArray2[l] + sumArray[l];
                        array[l] = sumArray[l];
                        sumArray2[l] = answer[l];

                    }
                }
            }


            Console.Write(string.Join(" ", answer));

        }
    }
}

