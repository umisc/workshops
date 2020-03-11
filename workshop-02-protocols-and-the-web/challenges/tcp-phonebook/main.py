#!/usr/bin/env python

import csv

data = []
search_fields = []
with open('data.csv') as csvfile:
    d = csv.reader(csvfile)
    search_fields = next(d)
    for r in d:
        data.append({ search_fields[i]:r[i] for i in range(len(r)) })

print('TCP Phonebook V0.1.0')
print('Quit with -quit-')
print('Available search fields:')
print('\n'.join(search_fields))

inp = input()
while inp != '-quit-':
    sf = inp
    if sf not in search_fields:
        print('Invalid search field')
        exit()
    sv = input()
    match_count = len([x for x in data if sv in x[sf]])
    print('Matches:', match_count)
    inp = input()
print('Goodbye')
