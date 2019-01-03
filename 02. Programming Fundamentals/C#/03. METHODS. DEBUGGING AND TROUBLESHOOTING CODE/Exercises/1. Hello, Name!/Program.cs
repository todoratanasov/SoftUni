using System;

namespace _1._Hello__Name_
{
    class Program
    {
        static void Main(string[] args)
        {
            getName();
        }
        static void getName()
        {
            string name = $"Hello, {Console.ReadLine()}!";
            Console.WriteLine(name);
        }
    }
}
