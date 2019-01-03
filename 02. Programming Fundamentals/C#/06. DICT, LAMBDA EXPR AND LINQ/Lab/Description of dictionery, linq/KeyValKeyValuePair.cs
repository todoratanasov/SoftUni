using System;
using System.Collections.Generic;

namespace Description_of_dictionery__linq
{
    internal class KeyValKeyValuePair<T1, T2>
    {
        public static implicit operator KeyValKeyValuePair<T1, T2>(KeyValuePair<string, int> v)
        {
            throw new NotImplementedException();
        }
    }
}