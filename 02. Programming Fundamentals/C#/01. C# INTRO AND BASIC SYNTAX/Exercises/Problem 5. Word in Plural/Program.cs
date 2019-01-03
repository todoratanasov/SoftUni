using System;

namespace Problem_5._Word_in_Plural
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();
            int lengthOfWord = word.Length;
            char lastChar = word[lengthOfWord-1];
            char lastChars = word[lengthOfWord - 2];
            
            
            string answer = "";

            string final = "" + lastChars + lastChar;
            if (lastChar == 'y')
            {
                
                for(int i=0; i<lengthOfWord-1; i++)
                {
                    answer = answer + (word[i]);
                }
                Console.WriteLine(answer + "ies");
            }
            else if(lastChar=='o'||lastChar=='s'||lastChar=='x'||lastChar=='z')
            {
                for(int j=0; j<lengthOfWord; j++)
                {
                    answer = answer + (word[j]);
                }
                Console.WriteLine(answer + "es");
            }else if (final == "ch" || final == "sh")
            {
                for (int k = 0; k < lengthOfWord; k++)
                {
                    answer = answer + (word[k]);
                }
                Console.WriteLine(answer + "es");
            }
            else
            {
                for (int u = 0; u < lengthOfWord; u++)
                {
                    answer = answer + (word[u]);
                }
                Console.WriteLine(answer + "s");
            }

        }
    }
}
