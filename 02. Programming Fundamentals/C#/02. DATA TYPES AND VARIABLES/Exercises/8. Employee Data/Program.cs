using System;

namespace _8._Employee_Data
{
    class Program
    {
        //A marketing company wants to keep record of its employees.Each record would have the following characteristics:
        //•	First name
        //•	Last name
        //•	Age (0...100)
        //•	Gender(m or f)
        //•	Personal ID number(e.g. 8306112507)
        //•	Unique employee number(27560000…27569999)
        //Declare the variables needed to keep the information for a single employee using appropriate primitive data types.Use 
        //descriptive names.Print the data at the console.

        static void Main(string[] args)
    {
            string firstName = Console.ReadLine();
            string secondName = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            char gender = Convert.ToChar(Console.ReadLine());
            long personalId = long.Parse(Console.ReadLine());
            int emploeeNumber = int.Parse(Console.ReadLine());

            Console.WriteLine($"First name: {firstName}");
            Console.WriteLine($"Last name: {secondName}");
            Console.WriteLine($"Age: {age}");
            Console.WriteLine($"Gender: {gender}");
            Console.WriteLine($"Personal ID: {personalId}");
            Console.WriteLine($"Unique Employee number: {emploeeNumber}");
    }
}
}
