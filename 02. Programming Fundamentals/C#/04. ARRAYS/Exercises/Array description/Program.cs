 using System;
using System.Linq;

namespace Descreption_of_Array
{
    class Program
    {
        //Compare two char arrays lexicographically (letter by letter).
        //Print the them in alphabetical order, each on separate line.

        static void Main(string[] args)
        {

            int[] numbers = new int[5] { 1, 2, 3, 4, 5 };                   //по този начин се създава масив с хардкоднати стойности. Индексите му са
                                                                            //от 0 до length-1. Навсякъде когато след променливат има [] numbers[] значи
                                                                            //е масив
                                                                            //четене от конзола вар - 1
            int length = int.Parse(Console.ReadLine());                     //когато ни е дадена от конзолата дължината на масива
            int[] arr = new int[length];                                    //създаваме нов масив
            for (int i = 0; i < length; i++)                                //наливаме на всяка позиция съответната стойност една по една
            {
                arr[i] = int.Parse(Console.ReadLine());
            }
                                                                             //четене от конзола вар - 2

            string[] value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            int[] array = new int[value.Length];

            for (int i = 0; i < value.Length; i++)
            {
                array[i] = int.Parse(value[i]);
            }

                                                                             //четене от конзола вар - 3
            string input1 = Console.ReadLine();

            string[] array1 = input1.                                       //по този начин си избираме по кои делимитери '!', ' ' и пр. искаме да сплитва
                Split(new char[] { '!', ' ', '.' }, StringSplitOptions.
                RemoveEmptyEntries);

                                                                             //четене от конзола вар - 4 (най-правилния с linq)

            int[] array2 = Console.ReadLine().                              //по този начин директно си взехме от конзолата стринга Select(int.Parse)
                Split(" ", StringSplitOptions.RemoveEmptyEntries).          //избира всеки един от елементите и му прилага метода в скобите
                Select(int.Parse).ToArray();                                //и накрая ToArray() го направи масив


            string[] intToString = array2                                   // x => x.ToString() - това е lambda expression и примерно сега го  
                .Select(x => x.ToString()).ToArray();                       //превърнах целия int масив в string масив

                                                     //принтиране на конзолата

            Console.Write(string.Join(" ", array2));                    //по този начин ще изпринтира всичките стойности на масива разделени с
                                                                            //каквото е в кавичките

            Array.Reverse(array2);                                          //по този начин се обръщат стойностите на масива отпред назад

            numbers[1] = 1;                                                 //по този начин се налива на първа позиция стойнст 1

            for (int i = 0; i < numbers.Length; i++)                        //по този начин се обхожда масив
            {
                int x = numbers[i];
            }

            foreach (int number in array2)
            {
                Console.Write(number);

            }

        }
    }
}
