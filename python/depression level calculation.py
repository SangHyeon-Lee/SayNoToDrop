import csv
dict = {}
f = open('esm.csv', 'r')
read = csv.reader(f)
for row in read:
    if row[0]!='UID':
        a = row[1]
        a = a.split('T')
        b = a[1]
        a = a[0]
        b = b.split('.')[0]
        if not row[0]+" "+a in dict:
            dict[row[0]+" "+a] = [(row[2],int(row[3])-int(row[6])+int(row[9]))]
        else:
            dict[row[0]+" "+a].append((row[2], int(row[3]) - int(row[6]) + int(row[9])))
'''
g = open('result2.csv', 'w')
for i in dict:
    print(i)
    q = i.split(' ')
    g.write(q[0] + "," + q[1]+"\n")
    for j in dict[i]:
        g.write(","+j[0]+","+str(j[1])+"\n")
g.close()


'''
sum1 = []
for j in dict:
    l = dict[j]
    sum = 0
    for i in range(len(l)-1):
        now = l[i][1]
        next = l[i+1][1]
        if now >-3 and next > -3:
            continue
        elif now <= -3 and next <= -3:
            now2 = -3 - now
            next2 = -3 - next
            sum += (now2+next2)*(int(l[i+1][0]) - int(l[i][0]))/2
        elif now > -3 and next <= -3:
            dif = now - next
            dif2 = -3 - next
            sum += dif*(int(l[i+1][0]) - int(l[i][0]))/2 / (dif**2) * (dif2**2)
        elif now <= -3 and next > -3:
            dif = next - now
            dif2 = -3 - now
            sum += dif * (int(l[i + 1][0]) - int(l[i][0])) / 2 / (dif ** 2) * (dif2 ** 2)
    sum1.append((j,sum))
sum1.sort()
print(sum1)

g = open('result.csv', 'w')
for i in sum1:
    b = i[0].split(" ")
    g.write(b[0]+","+b[1]+","+str(i[1])+"\n")
g.close()
f.close()
print(sum1)
