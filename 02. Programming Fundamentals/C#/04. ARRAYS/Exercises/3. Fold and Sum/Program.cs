using System;

namespace _3._Fold_and_Sum
{
    class Program
    {
        //Read an array of 4*k longegers, fold it like shown below, and prlong the sum of the upper and lower two rows (each holding 2 * k longegers):

        static void Main(string[] args)
        {
            string[] stringValue= Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            long[] value = new long[stringValue.Length];

            for (long i = 0; i < stringValue.Length; i++)
            {
                value[i] = long.Parse(stringValue[i]);
            }
            
            long length = stringValue.Length; //12

            long[] array = new long[length / 2];

            for (long i = 0; i < length/2; i++)
            {
                array[i] = long.Parse(stringValue[i + length / 4]);
            }


            long[] newArray = new long[array.Length]; //0, 0, 0, 0, 0, 0
            long newLength = newArray.Length;//6
            
            long temp = 1;
            for (long i = 0; i < length/4; i++)
            {
                
                newArray[i] = value[length/4-temp];
                for (long j = 0; j < length/4;)
                {            //5                        //11
                             //4                        //10
                             //3                        //9
                    newArray[newLength/2-1 + temp] = value[length - temp];
                    j++;
                    break;
                }
                temp++;
                
            }
            for (long i = 0; i < newLength; i++)
            {
                Console.Write($"{array[i]+newArray[i]} ");
            }
            

        }
    }
}
