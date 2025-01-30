import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default">Прочитать историю</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Небольшая история о том, почему творчество автора именуется Ожогом
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ожог - жгучая боль, при контакте с очень горячим объектом, только в
            случае с автором, он обжегся об душу человека, прекрасного,
            замечательно и добродушного, но слишком горячего, свой путь в
            качестве стихотворца, автор начал как раз тогда когда впервые
            обжегся об этого человека.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Продолжить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
