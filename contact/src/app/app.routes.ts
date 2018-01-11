import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

export const rootRouterConfig: Routes = [
	{path:'',component:ListComponent},
	{path:'list',component:ListComponent},
	{path:'add',component:EditComponent},
	{path:'edit/:id',component:EditComponent},
	{path: 'detail/:id',component:DetailComponent}
]