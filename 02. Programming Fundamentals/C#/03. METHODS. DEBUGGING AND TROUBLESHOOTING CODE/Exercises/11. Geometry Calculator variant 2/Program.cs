using System;

namespace _12_Master_Numbers2
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string nString = Convert.ToString(n);
            

            for (int i = 1; i <=n; i++)
            {
                //invoke the method for symmetric 
                string first = SymmetricChecker(Convert.ToString(i));
                string iToCheck = Convert.ToString(i);
                if (first==iToCheck)
                {                    
                        //invoke the method for sum of digits is divisible by 7
                        int second = DivisibleBy7Checker(int.Parse(first));
                    if (second!=0)
                    {
                        //invoke the method for even digit
                        bool third = OneEvenDigit(Convert.ToString(second));
                        if (third==true)
                        {
                            Console.WriteLine(second);
                        }
                    }
                }
            }
        }
        static string SymmetricChecker(string number)
        {
            string answer = "";
            for (int j = number.Length-1; j >=0 ; j--)
            {
                char x = Convert.ToChar(number[j]);
                answer += x;
            }

            return answer;
        }
        static int DivisibleBy7Checker(int number1)
        {
            int answer = 0;
            int number2 = number1;
            int sum = 0;
            while (number1 != 0)
            {
                sum += number1 % 10;
                number1 /= 10;
            }
            if (sum%7==0)
            {
                answer = number2;
            }

            return answer;
        }
        static bool OneEvenDigit(string number2)
        {
            bool answer2 = false;
            string StringToCheck = "";
            


            for (int l = number2.Length-1; l >= 0; l--)
            {
                char z = Convert.ToChar(number2[l]);
                StringToCheck += z;
                int IntToCheck = int.Parse(StringToCheck);
                if (IntToCheck%2==0)
                {
                    answer2 = true;
                    l = 0;
                }
                StringToCheck = "";
            }
            
            return answer2;
        }
        
    }
}
