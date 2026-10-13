---
title: 'The Mom Test, version IA'
description: 'J’ai fait auditer la même analyse par deux modèles d’IA, en ne changeant que la façon dont le prompt présentait le travail. Ils avaient 32 % de constats en commun. Pourquoi la question décide de la réponse.'
---

Un prompt ne donne pas seulement une tâche à une IA. Il lui donne un point de vue. Et qui dit point de vue dit angles morts.

## Un fichier, deux prompts

Pour le projet final de ma formation de Data Analyst, j’ai fait auditer la même analyse, les ventes et les stocks d’un caviste en ligne, par deux modèles d’IA. Mêmes données, mêmes documents. Une seule chose changeait : la façon dont le prompt présentait le travail.

- Au premier : « reprenons un projet sur lequel tu as travaillé. »
- À l’autre : « voici le notebook d’un étudiant, audite-le. »

Résultat : 32 % de constats en commun. Sur le même fichier.

Et l’enjeu était réel : l’audit a repéré une couverture de stock annoncée à 35,6 mois qui était en réalité de 3. Un chiffre déjà présenté au client.

## La question porte déjà un parti pris

Dire à un modèle qu’il relit son propre travail le place dans une position où valider devient l’issue naturelle. Il ne ment pas, il ne flatte pas : il répond à la question telle qu’elle est posée, sachant que la question portait déjà un parti pris. C’est pour ça que « qu’est-ce qui ne va pas dans mon analyse ? » et « confirme que mon analyse tient la route » ne sont pas la même demande. La première ouvre, la seconde ferme. Et on écrit la seconde bien plus souvent qu’on ne le pense.

C’est *The Mom Test*, appliqué à l’IA. Demandez à votre mère si votre idée de business est bonne, elle vous dira oui… non pas parce qu’elle ment, mais parce que la question l’y invitait. Avec une IA, c’est pareil : au lieu de lui demander de valider votre travail, demandez-lui des faits que vous pouvez vérifier dans les données.

## Trois habitudes que j’ai prises depuis

1. **Écrire le prompt qui autorise explicitement à démolir le travail**, surtout quand c’est le mien.
2. **Changer la posture, pas seulement la question**, et comparer ce qui ressort.
3. **Ne jamais garder un constat sans le vérifier dans les données.** Les deux IA se sont trompées au moins une fois. Celle qui auditait « le notebook d’un étudiant » m’a reproché d’avoir faussé les ventes en supprimant des doublons. En réalité, chaque produit apparaissait deux fois dans l’export, une ligne pour sa fiche et une pour sa photo, et j’avais gardé la bonne. Celle qui relisait « son » projet a jugé mes marges moyennes mal calculées. Une fois recalculées, elles ne changeaient presque pas, et aucune décision non plus. À chaque fois, c’est en retournant aux données que j’ai pu trancher.

Parce que quoi qu’une IA vous dise, la réponse est toujours dans les données. Si un constat ne peut pas s’appuyer sur un chiffre, ce n’est pas un constat. C’est une opinion, ou pire, une supposition.

Une IA ne confirme pas vos biais parce qu’elle veut faire plaisir. Elle les confirme parce que vous les avez mis dans la question. Celui qui écrit le prompt décide de ce que le modèle est capable de voir.

Quel est le dernier prompt que vous avez écrit et qui demandait secrètement un oui ?
